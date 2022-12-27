<?php

namespace App\Repository;

use App\Entity\Statutticket;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Statutticket|null find($id, $lockMode = null, $lockVersion = null)
 * @method Statutticket|null findOneBy(array $criteria, array $orderBy = null)
 * @method Statutticket[]    findAll()
 * @method Statutticket[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatutticketRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Statutticket::class);
    }

    // /**
    //  * @return Statutticket[] Returns an array of Statutticket objects
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
    public function findOneBySomeField($value): ?Statutticket
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
