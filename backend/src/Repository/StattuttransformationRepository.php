<?php

namespace App\Repository;

use App\Entity\Stattuttransformation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Stattuttransformation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stattuttransformation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stattuttransformation[]    findAll()
 * @method Stattuttransformation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StattuttransformationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Stattuttransformation::class);
    }

    // /**
    //  * @return Stattuttransformation[] Returns an array of Stattuttransformation objects
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
    public function findOneBySomeField($value): ?Stattuttransformation
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
