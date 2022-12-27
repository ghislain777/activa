<?php

namespace App\Repository;

use App\Entity\Statuttransformation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Statuttransformation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Statuttransformation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Statuttransformation[]    findAll()
 * @method Statuttransformation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatuttransformationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Statuttransformation::class);
    }

    // /**
    //  * @return Statuttransformation[] Returns an array of Statuttransformation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Statuttransformation
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
